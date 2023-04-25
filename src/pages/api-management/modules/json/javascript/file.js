export default {
  subtitle: 'File',
  desc: 'File 对象是来自用户在一个 <input> 元素上选择文件后返回的 FileList 对象，也可以是来自由拖放操作生成的 DataTransfer 对象，或者来自 HTMLCanvasElement 上的 mozGetAsFile() API。',
  types: [
    {
      title: '构造函数',
      list: [
        {
          key: 'new File(bits, name[, options])',
          caption: [
            `bits : 一个包含ArrayBuffer，ArrayBufferView，Blob，或者 DOMString 对象的 Array — 或者任何这些对象的组合。这是 UTF-8 编码的文件内容。`,
            `USVString，表示文件名称，或者文件路径。`,
            `options: 选项对象. 对象属性type表示文件mime类型, 对象属性lastModified表示文件最后修改时间的 Unix 时间戳`,
            `
            var file = new File(["foo"], "foo.txt", {
              type: "text/plain",
              lastModified: new Date(2017, 1, 1),
            });
            
            `,
          ],
        },
      ],
    },
    {
      title: '属性',
      list: [
        {
          key: 'lastModified',
          caption: [`只读属性 File.lastModified 返回所引用文件最后修改日期，为自 1970 年 1 月 1 日 0:00 以来的毫秒数。没有已知的最后修改时间则会返回当前时间。`, `var time = instanceOfFile.lastModified;`],
        },
        {
          key: '.name',
          caption: [`返回当前 File 对象所引用文件的名字。`, `xxxxxx`],
        },
        {
          key: '.size',
          caption: [`123123`, `xxxxxx`],
        },
        {
          key: 'type',
          caption: [`返回 File 对象所表示文件的媒体类型（MIME）。`, ` "text/plain"  "image/png"  图像、文档、音频和视频`],
        },
      ],
    },
    {
      title: '方法  File 接口没有定义任何方法，但是它从 Blob 接口继承了以下方法',
      list: [
        {
          key: 'Blob.slice([start[, end[, contentType]]])',
          caption: [`返回一个新的 Blob 对象，它包含有源 Blob 对象中指定范围内的数据。`],
        },
      ],
    },
  ],
}
