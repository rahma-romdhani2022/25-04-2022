import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisServiceService  {
  
  constructor(private http: HttpClient) { }

  private urlGetAll="http://localhost:8281/consultation/Consultations" ; 
  getAllConsultations(): Observable<Object[]> {
      return this.http.get<Object[]>(`${this.urlGetAll}`)
    }
  
    private addAvisExperts ="http://localhost:8281/avisExpert/addAvis" ; 
    addAvisExpert(idExpert: number): Observable<any> {
    return this.http.post(`${this.addAvisExperts}/${idExpert}` ,{});
  }
  private urlPutAvisExpert ="http://localhost:8281/Auto/ajouterReponseAvis/{idAutoDetection}/{idConsultation}/{idAvisExpert}" ; 
  putAvisExpert(idAutoDetection : number , idConsultation: number ,idAvisExpert : number ): Observable<any> {
    return this.http.put(`${this.urlPutAvisExpert}/${idAutoDetection}/${idConsultation}/${idAvisExpert}` , {});
  }

  private getconsultationByID = "http://localhost:8281/consultation"
  getConsultationID(idConsult: number): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.getconsultationByID}/${idConsult}`, {

    });
  }

}