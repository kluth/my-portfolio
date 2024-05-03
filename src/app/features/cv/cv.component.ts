import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatExpansionModule, MatChipsModule, MatButtonModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvComponent {
openChatPanel() {
throw new Error('Method not implemented.');
}
  name = 'Matthias Kluth';
  email = 'kluthmatthias@gmail.com';
  title = 'Software Architect Extraordinaire';
  summary = 'Unleashing the power of code to revolutionize user and developer experiences.';

  // Suggested code may be subject to a license. Learn more: ~LicenseLog:3873935414.
skills = [
  { name: 'Angular', description: 'A popular JavaScript framework for building web applications.' },
  { name: 'NX Workspace', description: 'A powerful tool for managing multiple Angular projects.' },
  { name: 'Jest', description: 'A JavaScript testing framework for writing unit and integration tests.' },
  { name: 'Cypress', description: 'An end-to-end testing framework for web applications.' },
  { name: 'Laravel', description: 'A PHP framework for building web applications.' },
  { name: 'GraphQL', description: 'A query language for APIs that allows for efficient data retrieval.' },
  { name: 'Scrum Master', description: 'A role in Agile development responsible for facilitating Scrum ceremonies and ensuring the team follows Agile principles.' },
  { name: 'Agile', description: 'A software development methodology that emphasizes iterative development, team collaboration, and customer feedback.' },
  { name: 'Testing', description: 'The process of evaluating a software product to ensure it meets its requirements and is free of defects.' },
  { name: 'DevOps', description: 'A set of practices that combines software development and IT operations to improve the speed and quality of software delivery.' }
];



  experiences = [
    {
      title: 'Full Stack Software Engineer',
      company: 'StartupWerk GmbH, Oberhausen',
      responsibilities: [
        'Conduct thorough testing to ensure software quality.',
        'Develop and implement new features and enhancements.',
        'Maintain and improve existing software systems.',
        'Manage and oversee DevOps processes.',
        'Facilitate and lead Scrum ceremonies as Scrum Master.'
      ]

    },
    {
      title: 'Full Stack Software Engineer',
      company: 'PaiBo Soft GmbH, Garching bei München',
      responsibilities: [
        'Conduct thorough testing to ensure software quality.',
        'Develop new features and enhancements for existing software.',
        'Maintain and update existing software to keep it running smoothly.',
        'Migrate legacy code to modern platforms and technologies.'
      ]

    },
    {
      title: 'Full Stack Software Engineer',
      company: 'IPI GmbH, Lichtenau',
      responsibilities: [
        'Conduct thorough testing to ensure software quality.',
        'Develop new features and enhancements for existing software.',
        'Maintain and update existing software to keep it running smoothly.',
        'Migrate legacy code to modern platforms and technologies.',
        'Work with SharePoint and Azure cloud platforms.',
      ]
    }
  ];

  educations = [
    {
      degree: 'examinierter Altenpfleger',
      university: 'maxQ - Fachseminar für Altenpflege',
      courses: [
        'Anatomie',
        'Medikamentenlehre',
        'Wundversorgung',
        'Teamführung',
        'Psychologie'
      ]
    }
  ];

  projects = [
    {
      title: 'My Portfolio',
      subtitle: 'A personal website, showing off my skills.',
      description: 'While CVs are a nice to have, A portfolio website shows off ones skills way better. Including the actual sources, interested recruiters and CTOs can have a look at ones coding style.',
      imageUrl: 'https://placebeard.it/640x360',
      repository: '',
      technologies: ['Angular', 'Material Design', 'TypeScript']
    }
  ];
}
