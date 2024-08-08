import { ChangeDetectionStrategy, Component } from '@angular/core'
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonCheckbox } from '@ionic/angular/standalone'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonCheckbox,
  ],
})
export class HomePage {
  constructor() { }

  onClick() {
    console.log("Item clicked")
  }
}
