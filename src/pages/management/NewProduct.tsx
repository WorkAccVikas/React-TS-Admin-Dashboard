import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const NewProduct = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [photo, setPhoto] = useState<string>();

  const changeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("In changeImageHandler ::: ", e.target.files);
    const file: File | undefined = e.target.files?.[0];
    // console.log(`🚀 ~ changeImageHandler ~ file:`, file);

    const reader: FileReader = new FileReader();
    // console.log(`🚀 ~ changeImageHandler ~ reader:`, reader);

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        // reader.result = base64 string of file
        // console.log("reader.onloadend = ", reader.result);

        if (typeof reader.result === "string") setPhoto(reader.result);
      };
    }
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="product-management">
        <article>
          <form>
            <h2>New Product</h2>
            <div>
              <label>Name</label>
              <input
                type="text"
                required
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label>Price</label>
              <input
                type="text"
                required
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>

            <div>
              <label>Stock</label>
              <input
                type="text"
                required
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
              />
            </div>

            <div>
              <label>Photo</label>
              <input
                type="file"
                required
                placeholder="Name"
                onChange={changeImageHandler}
              />
            </div>

            {photo && <img src={photo} alt="New Image" />}

            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default NewProduct;
