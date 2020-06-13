import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconsModule } from './icons/icons.module';

@NgModule({
	declarations: [AppComponent, AboutComponent, ProjectsComponent, HeaderComponent, FooterComponent],
	imports: [BrowserModule, IconsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
