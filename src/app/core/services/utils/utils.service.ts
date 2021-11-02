import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public LOADING;
  constructor(
    private router: Router,
    private loadingController: LoadingController,
  ) { }

  handleRefresh(subscribe?: boolean) {
    if (subscribe) {
      return this.router.events
      .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
    }
    this.router.events
    .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
    .subscribe(event => {
      if (
        event.id === 1 &&
        event.url === event.urlAfterRedirects
      ) {
        this.router.navigateByUrl('/tabs/starships');
      }
    })
  }

  async showLoading(message?) {
    this.LOADING = await this.loadingController.create({
      message: message || 'loading...',
      spinner: 'bubbles',
    });
    await this.LOADING.present();
  }

  async dismissLoading(){
    this.loadingController.getTop().then(loading => {
      if (loading) {
        loading.dismiss()
      }
    })
  }
}
