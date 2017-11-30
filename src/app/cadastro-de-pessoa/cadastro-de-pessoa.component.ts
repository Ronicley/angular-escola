import {Component, OnInit} from '@angular/core';
import {PessoasService} from "../pessoas.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cadastro-de-pessoa',
  templateUrl: './cadastro-de-pessoa.component.html',
  styleUrls: ['./cadastro-de-pessoa.component.css']
})
export class CadastroDePessoaComponent implements OnInit {
  id = null;
  nome = null;
  curso = null;
  cargo = null;
  cadastro_ok = false;
  cadastro_erro = false;
  atualizar_ok = false;
  atualizar_erro = false;

  constructor(private pessoasService: PessoasService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.pessoasService.getPessoa(this.id)
        .subscribe(pessoa => {
          this.nome = pessoa.nome;
          this.curso = pessoa.curso;
          this.cargo = pessoa.cargo;
        });
    }
  }

  salvar() {
    if (this.id) {
      this.pessoasService.updatePessoa(this.id, this.nome, this.cargo, this.curso)
        .subscribe(pessoa => {
            this.atualizar_ok = true;
            this.atualizar_erro = false;
          },
          erro => {
            this.atualizar_ok = false;
            this.atualizar_erro = true;
          });
    } else {
      this.pessoasService.addPessoa(this.nome, this.cargo, this.curso)
        .subscribe(pessoa => {
            console.log(pessoa);
            this.cadastro_ok = true;
            this.cadastro_erro = false;
            this.nome = null;
            this.cargo = null;
            this.curso = null
          },
          erro => {
            this.cadastro_ok = false;
            this.cadastro_erro = true;
          });
    }
  }

}
