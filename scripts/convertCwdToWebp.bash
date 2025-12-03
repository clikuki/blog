#! /bin/bash

for img in *.jpg; do cwebp $img -o "${img%.*}".webp; done
for img in *.png; do cwebp $img -o "${img%.*}".webp; done