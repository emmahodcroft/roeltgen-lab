---
layout: page
title: Collaborations
permalink: /collaborations/
---
<div class="grid grid-3">
  {% for item in site.collaborations %}
  <article class="card">
    {% if item.image %}<div class="card-img" style="background-image:url('{{ item.image | relative_url }}')"></div>{% endif %}
    <div class="card-body">
      <h3 class="card-title"><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
      {% if item.summary %}<div class="card-meta">{{ item.summary }}</div>{% endif %}
    </div>
  </article>
  {% endfor %}
</div>
