---
layout: archive
title: "Fun Stuff"
permalink: /fun-stuff/
author_profile: true
order: 99
---

<style>
.photo-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.gallery-item {
  width: 100%;
  max-width: 800px;
  position: relative;
}

.gallery-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.gallery-item .caption {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9em;
}
</style>

<div class="photo-gallery">
  <div class="gallery-item">
    <img src="/assets/images/photo1.jpg" alt="Photo 1">
    <p class="caption">Exploring new trails 🌿</p>
  </div>
  <div class="gallery-item">
    <img src="/assets/images/photo2.jpg" alt="Photo 2">
    <p class="caption">Sunset vibes 🌅</p>
  </div>
  <div class="gallery-item">
    <img src="/assets/images/photo3.jpg" alt="Photo 3">
    <p class="caption">Coffee and thoughts ☕</p>
  </div>
  <div class="gallery-item">
    <img src="/assets/images/photo4.jpg" alt="Photo 4">
    <p class="caption">Moments of peace 🌸</p>
  </div>
</div>
