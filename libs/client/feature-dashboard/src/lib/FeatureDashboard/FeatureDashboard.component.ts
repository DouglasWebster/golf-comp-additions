import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService} from '@comp/client/data-access'

@Component({
  selector: 'lib-feature-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './FeatureDashboard.component.html',
  styleUrl: './FeatureDashboard.component.scss',
})
export class FeatureDashboardComponent {
  private readonly apiService = inject(ApiService);

  competitorItems$ = this.apiService.getAllCompetitorItems();
}
