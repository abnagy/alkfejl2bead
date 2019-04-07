import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpOptions } from "./auth.service";

@Injectable({
  providedIn: 'root'
})

export class TransactionService {
  private transactionUrl = 'http://localhost:8080/issues';
  constructor(
    private http: HttpClient
  ) { }

  getTransactions(): Promise<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionUrl, httpOptions).toPromise();
  }

  getTransaction(id): Promise<Transaction> {
    return this.http.get<Transaction>(`${this.transactionUrl}/${id}`, httpOptions).toPromise();
  }

  modifyTransaction(id: number, transaction: Transaction): Promise<Transaction> {
    return this.http.put<Transaction>(
      `${this.transactionUrl}/${id}`,
      transaction,
      httpOptions
    ).toPromise();
  }

  addTransaction(transaction: Transaction): Promise<Transaction> {
    return this.http.post<Transaction>(
      `${this.transactionUrl}`,
      transaction,
      httpOptions
    ).toPromise();
  }
}
