import { Component, OnInit } from '@angular/core';
import {IRecursoComunitario} from "../../../../interfaces/i-recurso-comunitario";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaDireccionService} from "../../../../servicios/carga-direccion.service";
import {CargaRecursoComunitarioService} from "../../../../services/recursos/carga-recurso-comunitario.service";

@Component({
  selector: 'app-ver-recurso',
  templateUrl: './ver-recurso.component.html',
  styleUrls: ['./ver-recurso.component.scss']
})
export class VerRecursoComponent implements OnInit {
  public recurso_comunitario: IRecursoComunitario | any;
  // Cogemos la id de la ruta para obtener el recurso que queremos ver
  public id = this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute, private cargaDirecciones: CargaDireccionService, private cargaRecursosComunitarios: CargaRecursoComunitarioService, private router: Router) {
  }

  ngOnInit(): void {
    this.cargaRecursosComunitarios.getRecursoComunitario(this.id).subscribe(
      recurso =>{
        this.recurso_comunitario = recurso;
      },
      error => {
        console.log(error)
      }
    )
  }

}
