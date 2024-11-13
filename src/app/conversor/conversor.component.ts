import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  moedas: any;
  valor: number = 0;
  resultado: number = 0;
  moedaDe: string = 'USD';
  moedaPara: string = 'BRL';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obterMoedas();
  }

  obterMoedas() {
    // Substitua 'YOUR_API_KEY' pela sua chave da API
    this.http.get(`https://api.exchangerate-api.com/v4/latest/${this.moedaDe}`)
      .subscribe((data: any) => {
        this.moedas = data.rates;
      });
  }

  converter() {
    const taxa = this.moedas[this.moedaPara];
    this.resultado = this.valor * taxa;
  }
}