---
layout: page
title: People
permalink: /people/
---
<div class="grid grid-3">
  {% assign people = site.people | sort: 'order' %}
  {% for person in people %}
  <article class="card">
    {% if person.photo %}<div class="card-img" style="background-image:url('{{ person.photo | relative_url }}')"></div>{% endif %}
    <div class="card-body">
      <h3 class="card-title"><a href="{{ person.url | relative_url }}">{{ person.name }}</a></h3>
      {% if person.role %}<div class="card-meta">{{ person.role }}</div>{% endif %}
    </div>
  </article>
  {% endfor %}
</div>
