import { Component, inject, NgModule, signal, TemplateRef, WritableSignal } from '@angular/core';
import { ModalService } from '../../modal.service';
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ ReactiveFormsModule,FormsModule,],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
	productForm: FormGroup;
	productData:any;

  private modalService = inject(NgbModal);



  constructor(
    private formBuilder: FormBuilder,
  ) {

    this.productData = [];



	this.productForm = this.formBuilder.group({
		name: [""],
		description: [""],
		price: [""],
		time: [""]		 
	  })




  }

  onSubmit(){
	this.productData.push(this.productForm)

	console.log(this.productData,'productdata')
  }





  
	closeResult: WritableSignal<string> = signal('');

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result: any) => {
				this.closeResult.set(`Closed with: ${result}`);
			},
			(reason: any) => {
				this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
			},
		);
	}

	private getDismissReason(reason: any) {
		console.log()
	}




  
}
