import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Sentence } from './sentence';
import { StartService } from './start.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  form: FormGroup;
  sentences: Observable<Sentence>;

  constructor(private formBuilder: FormBuilder, 
              private startService: StartService) { 
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.buildForm();
  }
  
  private buildForm() : FormGroup {
    return this.formBuilder.group({
      sentence: ['', Validators.required]
    })
  }

  createSentence(): void {
    let sentence: Sentence = this.form.value;
    this.startService.create(sentence).subscribe(sentence => (null));
  }
}
