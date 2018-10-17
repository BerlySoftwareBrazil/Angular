import { Component }    from    "@angular/core"
import { DataServices} from "../servicos/dataServices"
@Component({
    selector:"lista-cotacoes",
    templateUrl: "./cotacao.component.html",
    styleUrls: ["./cotacao.component.css"]
})
export class ListaCotacao{
    public cotacoes = [];
  constructor(private data: DataServices){
      this.cotacoes = data.cotacoes;
  }
}