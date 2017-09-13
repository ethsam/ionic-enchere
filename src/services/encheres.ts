import { Enchere } from "../models/enchere";

export class EnchereService {

  private tablenchere: Enchere[] = [];

  addEnchere(enchere: Enchere){
    this.tablenchere.push(enchere);
  }

  addEncheres(encheres: Enchere[]){
    this.tablenchere.push(...encheres);
  }

  removeEnchere(index: number){
    this.tablenchere.splice(index, 1);
  }

  getEncheres(){
    return this.tablenchere;
  }

  changeStatusToBuying(enchere: Enchere) {
    enchere.status = "buying";
  }

}
