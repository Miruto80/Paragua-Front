import { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./ImageUploaderMultiple.css";

export default function ImageUploaderMultiple({
  onImagesSelected,
  maxFiles = 8,
  itemLabel = "la habitación",
}) {
  const [items, setItems] = useState([]); // [{ file, preview }]
  const itemsRef = useRef(items);

  const onDrop = useCallback((acceptedFiles) => {
    const disponibles = Math.max(0, maxFiles - items.length);
    const nuevos = acceptedFiles.slice(0, disponibles).map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    const combinados = [...items, ...nuevos];
    setItems(combinados);
    onImagesSelected(combinados.map(item => item.file));
  }, [items, onImagesSelected, maxFiles]);

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": []
    },
    maxSize: 5 * 1024 * 1024,
    multiple: true
  });

  const removeItem = (index) => {
    const removedItem = items[index];
    if (removedItem) URL.revokeObjectURL(removedItem.preview);

    const nuevos = items.filter((_, itemIndex) => itemIndex !== index);
    setItems(nuevos);
    onImagesSelected(nuevos.map(item => item.file));
  };

  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  useEffect(() => {
    return () => {
      itemsRef.current.forEach(item => URL.revokeObjectURL(item.preview));
    };
  }, []);

  return (
    <div className="image-uploader">
      <div
        {...getRootProps()}
        className={`image-uploader-dropzone${isDragActive ? " is-drag-active" : ""}`}
      >
        <input {...getInputProps()} />
        <span className="image-uploader-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M5 14.5v3A2.5 2.5 0 0 0 7.5 20h9a2.5 2.5 0 0 0 2.5-2.5v-3" />
          </svg>
        </span>
        <span className="image-uploader-title">
          {isDragActive ? "Soltá tus imágenes aquí" : `Agregá imágenes de ${itemLabel}`}
        </span>
        <span className="image-uploader-description">
          Arrastralas y soltá aquí, o <span className="image-uploader-browse">explorá tus archivos</span>
        </span>
        <span className="image-uploader-formats">JPG, PNG o WEBP · Máximo 5 MB por imagen</span>
        <span className="image-uploader-limit">Hasta {maxFiles} imágenes</span>
      </div>

      {items.length > 0 && (
        <div className="image-uploader-previews">
          <div className="image-uploader-previews-heading">
            <span>Imágenes seleccionadas</span>
            <span>{items.length} / {maxFiles}</span>
          </div>
          {items.map((item, index) => (
            <div className="image-uploader-preview" key={item.preview}>
              <img
                src={item.preview}
                alt={item.file.name}
              />
              {index === 0 && (
                <span className="image-uploader-primary">Principal</span>
              )}
              <button
                type="button"
                className="image-uploader-remove"
                onClick={() => removeItem(index)}
                aria-label={`Quitar ${item.file.name}`}
                title="Quitar imagen"
              >
                <span aria-hidden="true">×</span>
              </button>
              <span className="image-uploader-filename" title={item.file.name}>
                {item.file.name}
              </span>
            </div>
          ))}
        </div>
      )}

      {fileRejections.length > 0 && (
        <p className="image-uploader-error" role="alert">
          Algún archivo es inválido. Solo JPG, PNG o WEBP, máximo 5MB cada uno.
        </p>
      )}
    </div>
  );
}