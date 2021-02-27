import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogic',
  templateUrl: './blogic.component.html',
  styleUrls: ['./blogic.component.css']
})
export class BlogicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myoutput;

  removeVowels(str:string)
  {
    for(let i=0;i<=str.length;i++)
    {
      if(str.charAt(i) == 'a')
      {
        str = str.replace(str.charAt(i),'')
  
      }
      else if(str.charAt(i) == 'e')
      {
        str = str.replace(str.charAt(i),'')
      }
      else if(str.charAt(i) == 'i')
      {
        str = str.replace(str.charAt(i),'')
      }
      else if(str.charAt(i) == 'o')
      {
        str = str.replace(str.charAt(i),'')
      }
      else if(str.charAt(i) == 'u')
      {
        str = str.replace(str.charAt(i),'')
      }


    }

    this.myoutput = str;

  }

}
