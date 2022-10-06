import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  userForm: FormGroup;
  listData:any;
  http: any;

  constructor(private fb: FormBuilder) {
    this.listData=[];

    this.userForm = this.fb.group({
      name: ['',Validators.required],
      mobileno: ['',Validators.required],
      address: ['',Validators.required],
      skills: ['',Validators.required],
      hobbies: ['',Validators.required],
      photo: ['',Validators.required],

    }) 
    
  }


  name:string='';
  file:any;
  getName(name:string){
    this.name=name;
  }
  getFile(event:any){
    this.file=event.target.files[0];
    console.log('file',this.file);
  }
  submitData(){

    let formData=new FormData();
    formData.set("name",this.name)
    formData.set("file",this.file)
    
this.http.post('http://localhost:3001/upload/uploadFiles',formData).subscribe(
  (response)=>{
    
  }
)

  }

  public addItem():void{
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }

  reset(){
    this.userForm.reset();
  }

 

  ngOnInit(): void {
  }

}
