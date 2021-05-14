import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
    //Tham khảo về DomSanitizer https://viblo.asia/p/security-in-angular-Qbq5QWamZD8
  constructor(private sanz: DomSanitizer) {

  }
  transform(value: any): any {
    return this.sanz.bypassSecurityTrustResourceUrl(value);
  }

}
