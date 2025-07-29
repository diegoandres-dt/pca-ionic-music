import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FovoritosService {
  private storageKey = 'idFavoritos';

  toggleId(id: number): number[] {
    let ids = this.getIds();

    if (ids.includes(id)) {
      ids = ids.filter(item => item !== id);
    } else {
      ids.push(id);
    }

    localStorage.setItem(this.storageKey, JSON.stringify(ids));
    return ids;
  }

  getIds(): number[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  clearIds(): void {
    localStorage.removeItem(this.storageKey);
  }

  idExiste(id: number): boolean {
    const ids = this.getIds();
    return ids.includes(id);
  }

}
