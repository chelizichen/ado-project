import { Collect, Inject } from "ado-node";
import { doctor } from "./doctor.entity";

@Collect()
export class doctorService{
  @Inject(doctor)
  doctor!: doctor
    
}