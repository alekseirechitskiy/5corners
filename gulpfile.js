//Основной модуль
import gulp from "gulp";
//Импорт путей
import { path } from "./gulp/config/path.js";
//Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

//Передаем значения в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

//Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { cleanDist } from "./gulp/tasks/cleanDist.js";
import { html } from "./gulp/tasks/html.js";
import { deleteGui } from "./gulp/tasks/deleteGui.js";
import { server } from "./gulp/tasks/server.js";
import { style } from "./gulp/tasks/style.js";
// import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { sprite } from "./gulp/tasks/svgSprite.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

//Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.less, style);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

export { sprite }

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, style, js, images));

//Построение сценариев выполнения задач
const dev = gulp.series(cleanDist, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(cleanDist, mainTasks, deleteGui);
const deployZIP = gulp.series(cleanDist, mainTasks, zip);
const deployFTP = gulp.series(cleanDist, mainTasks, ftp);

// Экспорт сценариев
export { dev }
export { build }
export { deployZIP }
export { deployFTP }

//Выполнение сценария по умолчанию
gulp.task('default', dev);