import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconsModule } from './icons/icons.module';
import { SkillsComponent } from './skills/skills.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

@NgModule({
	declarations: [AppComponent, AboutComponent, ProjectsComponent, HeaderComponent, FooterComponent, SkillsComponent, MaintenanceComponent],
	imports: [BrowserModule, IconsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
