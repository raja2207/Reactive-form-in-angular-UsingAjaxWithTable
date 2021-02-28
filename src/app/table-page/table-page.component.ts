import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../first-service.service';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {

  taabb='';
 
  constructor(
    private first: FirstServiceService,
   )
    {  }

  ngOnInit(): void {
  }

  tab(): void {
    this.first.tabl()
    .then((data)=>{
      this.taabb=data;   
     
    })
    .catch(()=>{
      console.log('error');
      

    })
    .finally(()=>{

    })

  }  

}
