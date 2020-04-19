import path from 'path-browserify';

export function lazy(node, data) {
  const loaded = new Map();
  if (loaded.has(data.src)) {
    node.setAttribute('src', data.src);
  } else {
    const img = new Image();
    img.src = data.src;
    img.onload = () => {
      loaded.set(data.src, img);
      node.setAttribute('src', data.src);
    }
  }
  return {
    destroy() {},
  };
}

export function srcName(src, extName) {
  const { dir, name, ext } = path.parse(src);
  return path.join(dir, `${name}-${extName}${ext}`);
}
