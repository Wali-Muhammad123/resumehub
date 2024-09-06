export const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resume</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="p-8">
  <!-- Personal Details -->
  <section>
    <h1 class="text-4xl font-bold">{{personal_details.full_name}}</h1>
    <p class="text-gray-700">
      {{#personal_details.contact_info.email}}Email: {{personal_details.contact_info.email}} <br>{{/personal_details.contact_info.email}}
      {{#personal_details.contact_info.phone}}Phone: {{personal_details.contact_info.phone}} <br>{{/personal_details.contact_info.phone}}
      {{#personal_details.contact_info.linkedin}}LinkedIn: {{personal_details.contact_info.linkedin}}{{/personal_details.contact_info.linkedin}}
    </p>
    {{#personal_details.professional_summary}}
    <p class="mt-4">{{personal_details.professional_summary}}</p>
    {{/personal_details.professional_summary}}
  </section>

  <!-- Skills -->
  {{#skills.length}}
  <section class="mt-8">
    <h2 class="text-2xl font-bold">Skills</h2>
    <ul class="list-disc pl-6">
      {{#skills}}
      <li>{{.}}</li>
      {{/skills}}
    </ul>
  </section>
  {{/skills.length}}

  <!-- Education -->
  {{#education.length}}
  <section class="mt-8">
    <h2 class="text-2xl font-bold">Education</h2>
    {{#education}}
    <div class="mb-4">
      <h3 class="text-xl font-semibold">{{institution}}</h3>
      <p>{{degree}}, {{field_of_study}} - {{graduation_date}}</p>
    </div>
    {{/education}}
  </section>
  {{/education.length}}

  <!-- Work Experience -->
  {{#work_experience.length}}
  <section class="mt-8">
    <h2 class="text-2xl font-bold">Work Experience</h2>
    {{#work_experience}}
    <div class="mb-4">
      <h3 class="text-xl font-semibold">{{title}} at {{company}}</h3>
      <p class="italic">{{duration}}</p>
      <p>{{description}}</p>
      {{#notable_contributions.length}}
      <ul class="list-disc pl-6">
        {{#notable_contributions}}
        <li>{{.}}</li>
        {{/notable_contributions}}
      </ul>
      {{/notable_contributions.length}}
    </div>
    {{/work_experience}}
  </section>
  {{/work_experience.length}}

  <!-- Projects -->
  {{#projects.length}}
  <section class="mt-8">
    <h2 class="text-2xl font-bold">Projects</h2>
    {{#projects}}
    <div class="mb-4">
      <h3 class="text-xl font-semibold">{{name}}</h3>
      <p>{{description}}</p>
      <p><strong>Technologies Used:</strong> {{technologies}}</p>
      <p><strong>Role:</strong> {{role}}</p>
    </div>
    {{/projects}}
  </section>
  {{/projects.length}}

  <!-- Certifications -->
  {{#certifications.length}}
  <section class="mt-8">
    <h2 class="text-2xl font-bold">Certifications</h2>
    {{#certifications}}
    <div class="mb-4">
      <h3 class="text-xl font-semibold">{{title}}</h3>
      <p>{{certifying_body}} - {{date}}</p>
    </div>
    {{/certifications}}
  </section>
  {{/certifications.length}}

  <!-- Publications -->
  {{#publications.length}}
  <section class="mt-8">
    <h2 class="text-2xl font-bold">Publications</h2>
    {{#publications}}
    <div class="mb-4">
      <h3 class="text-xl font-semibold">{{title}}</h3>
      <p>Co-authors: {{#co_authors}}{{.}}, {{/co_authors}}</p>
      <p>{{date}}</p>
    </div>
    {{/publications}}
  </section>
  {{/publications.length}}

  <!-- Awards -->
  {{#awards.length}}
  <section class="mt-8">
    <h2 class="text-2xl font-bold">Awards</h2>
    {{#awards}}
    <div class="mb-4">
      <h3 class="text-xl font-semibold">{{title}}</h3>
      <p>{{awarding_body}} - {{date}}</p>
    </div>
    {{/awards}}
  </section>
  {{/awards.length}}

  <!-- Volunteer Experience -->
  {{#additional_sections.volunteer_experience.length}}
  <section class="mt-8">
    <h2 class="text-2xl font-bold">Volunteer Experience</h2>
    {{#additional_sections.volunteer_experience}}
    <div class="mb-4">
      <h3 class="text-xl font-semibold">{{role}} at {{organization}}</h3>
      <p class="italic">{{duration}}</p>
      <p>{{description}}</p>
    </div>
    {{/additional_sections.volunteer_experience}}
  </section>
  {{/additional_sections.volunteer_experience.length}}

  <!-- Languages -->
  {{#additional_sections.languages.length}}
  <section class="mt-8">
    <h2 class="text-2xl font-bold">Languages</h2>
    <ul class="list-disc pl-6">
      {{#additional_sections.languages}}
      <li>{{.}}</li>
      {{/additional_sections.languages}}
    </ul>
  </section>
  {{/additional_sections.languages.length}}

  <!-- Interests -->
  {{#additional_sections.interests.length}}
  <section class="mt-8">
    <h2 class="text-2xl font-bold">Interests</h2>
    <ul class="list-disc pl-6">
      {{#additional_sections.interests}}
      <li>{{.}}</li>
      {{/additional_sections.interests}}
    </ul>
  </section>
  {{/additional_sections.interests.length}}

</body>
</html>
`;
