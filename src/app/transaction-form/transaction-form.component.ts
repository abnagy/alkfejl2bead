import { Component, OnInit, Input, OnChanges, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Transaction } from '../transaction';


@Component({
  selector: 'transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit, OnChanges {

  types: string[] = ['bevasarlas', 'elelmiszer', 'egeszseg']
  transactionForm = this.fb.group({
    title: ['', [Validators.required]],
    place: [''],
    description: [''],
    type: ['', [Validators.required]],
  });
  @Input() transaction: Transaction = {
    id: null,
    title : '',
    type : [],
    created_at : '',
    message : '',
    updated_at : '',
    amount : '',
  };
  @Output() save = new EventEmitter<Transaction>();

  get title() { return this.transactionForm.get('title'); }
  get place() { return this.transactionForm.get('place'); }
  get description() { return this.transactionForm.get('description'); }
  get status() { return this.transactionForm.get('type'); }

  constructor(
    private fb: FormBuilder
  ) { }

  async ngOnInit() {}

  ngOnChanges() {
    this.transactionForm.patchValue(this.transaction);
  }

  onSubmit() {
    const emittedTransaction = Object.assign(this.transaction, this.transactionForm.value);
    this.save.emit(emittedTransaction);
  }
}
