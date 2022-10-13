import del from 'del';
export const deleteGui = () => {
  return del(app.path.build.htmlDel)
}