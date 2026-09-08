import { Component } from '@angular/core';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly services: Service[] = [
    {
      id: 's1',
      number: '01',
      title: 'Photography',
      description: 'Capturing moments with a creative eye, specializing in portrait and landscape photography.'
    }, 
    {
      id: 's2',
      number: '02',
      title: 'Branding Digital',
      description: '...'
    },
    {
      id: 's3',
      number: '03',
      title: 'Social Media Strategy',
      description: '...'
    }
  ];
}
