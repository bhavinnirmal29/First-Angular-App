import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <div>
  <button (click) = "increment()" [class] = "incr_counter"> Increment | {{counter}}</button>&nbsp;
  <button (click) = "decrement()" [class] = "decr_counter"> Decrement | {{counter}}</button>
  </div>
  <br>
  <div>
  <button (click) = "likeButton()" class="like-style"> Like Button</button>
  </div>
  <br>
  <span class="span-style">Counter : {{likeCounter}}</span>
  <div>
  <button (click) = "dislikeButton()" class="like-style"> DisLike Button </button>
  </div>
  <br>
  <div>
  <button (click)="like()" [class]="style"><span>Like | {{likecount}}</span></button>
  <button (click)="dislike()" [class]="style1"><span >Dislike | {{dislikecount}}</span></button>
</div>
  
  `,
  styles: 
  [`
  .incr-style{
    background-color:black;
    font-size:20px;
  }
  .incr
  {
    color:white;
  }
  .decr-style{
    background-color:red;
    font-size:20px;
  }
  .decr{
    color:yellow;
  }
  .like-style{
    background-color:black;
    color:white;
    font-size:24px;
  }
  .span-style{
    font-size:22px;
  }
  
  .like-button, .dislike-button {
    font-size: 1rem;
    padding: 5px 10px;
    color: #585858;
    }
    .liked, .disliked {
    font-weight: bolder;
    color: #1565c0;
    }
  `]
})
// <div>
  // <button
  // [ngClass]="{'like-button':true,'liked':flag2}"
  // (click)="like()">
  // Like | <span class="likes-counter">{{likes_counter}}</span>
  // </button>
  // <button
  // [ngClass]="{'dislike-button':true,'disliked':flag3}"
  // (click)="dislike()">
  // Dislike | <span class="dislikes-counter">{{dislikes_counter}}</span>
  // </button>
  // </div>
export class CounterComponent implements OnInit {
  incr_counter:string = "incr-style incr";
  decr_counter:string = "decr-style decr";
  constructor() { }

  ngOnInit(): void {
  }
  counter : number = 0;
  flag1:boolean=false;
  increment(): void{
    if(this.flag1==false){
      this.counter++;
      this.incr_counter = "incr-style incr"
      this.flag1=true;
    }
    else{
      this.counter--;
      this.incr_counter="incr";
      this.flag1 = false;
    }
  }
  decrement(): void{
    if(this.flag1==true){
      this.counter--;
      this.decr_counter="decr-style decr";
      this.flag1=false;

    }
    else
    {
      this.counter++;
      this.decr_counter="decr";
      this.flag1=true;
    }
  }
  likeCounter:number=20;
  flag:number=0;
  likeButton():void{
    if(this.flag==0){
      this.likeCounter++;
      this.flag=1;
    }
    else if(this.flag==1){
      this.likeCounter--;
      this.flag=0;
    }
  }
  dislikeButton():void{
    if(this.flag==1){
      this.likeCounter--;
      this.flag=0;
    }
  }
  //Gadekar's Code

    style:string="like-button";
    style1:string="dislike-button";
    likecount:number=100;
    dislikecount:number=25;
    flag2:number=0;
    flag3:number=0;
    like(){
        if(this.flag2==0 && this.flag3==1){
            this.likecount++;
            this.dislikecount--;
            this.flag2=1;
            this.flag3=0;
            this.style="like-button liked";
            this.style1="dislike-button";
        }
        else if(this.flag2==0){
            this.likecount++;
            this.flag2=1;
            this.style="liked like-button";
        }
        else if(this.flag2==1){
            this.likecount--;
            this.flag2=0;
            this.style="like-button";
        }

    }


    dislike(){
        if(this.flag2==1 && this.flag3==0){
            this.dislikecount++;
            this.likecount--;
            this.flag3=1;
            this.flag2=0;
            this.style1="dislike-button disliked";
            this.style="like-button";
            
        }
        else if(this.flag3==1){
            this.dislikecount--;
            this.flag3=0;
            this.style1="dislike-button";
        }
        else if(this.flag3==0){
            this.dislikecount++;
            this.flag3=1;
            this.style1="dislike-button disliked";
            this.style="like-button";
        }


    }
  //Gadekar's Code End 


  // likes_counter:number = 100;
  // dislikes_counter:number =25;
  // flag2:boolean = false;
  // flag3:boolean =false;

  // like():void{
  //   if(this.flag2){
  //     this.likes_counter--;
  //     this.flag2=false;
  //   }
  //   else{
  //     if(this.flag3){
  //       this.dislikes_counter--;
  //       this.flag3=false;
  //     }
  //     this.likes_counter++;
  //     this.flag2=true;
  //   }
  // }

  // dislike():void{
  //   if(this.flag3){
  //     this.dislikes_counter--;
  //     this.flag3=false;
  //   }
  //   else{
  //     if(this.flag2){
  //       this.likes_counter--;
  //       this.flag2=false;
  //     }
  //     this.dislikes_counter++;
  //     this.flag3=true;
  //   }
  // }
}
