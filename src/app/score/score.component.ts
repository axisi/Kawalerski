import {EventEmitter, Component, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  score: number;
  @Output( ) actionEvent = new EventEmitter<number>();



  constructor() { }

  action(value?: number){
    if (value === undefined || value === null){
      this.actionEvent.emit(this.score);
    }else{
      this.actionEvent.emit(value);
    }
  }

  ngOnInit(): void {
  }

}
