#! /bin/bash

for img in *; do cwebp $img -o "${img%.*}".webp; done