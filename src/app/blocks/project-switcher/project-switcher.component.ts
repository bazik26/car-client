import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-switcher.component.html',
  styleUrls: ['./project-switcher.component.scss']
})
export class ProjectSwitcherComponent implements OnInit {
  private readonly projectService = inject(ProjectService);
  
  public currentProject = '';
  public availableProjects = [
    { key: 'adenatrans', name: 'Adena Trans', color: '#217e02' },
    { key: 'premiumcars', name: 'Premium Cars', color: '#1a1a1a' },
    { key: 'budgetcars', name: 'Budget Cars', color: '#007bff' }
  ];

  ngOnInit() {
    this.currentProject = this.projectService.getProjectKey();
  }

  switchProject(projectKey: string) {
    this.projectService.switchProject(projectKey);
    this.currentProject = projectKey;
    
    // Перезагружаем страницу для применения изменений
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
