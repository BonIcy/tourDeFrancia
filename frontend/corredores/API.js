const urlAll = "http://localhost:6000/corredores/all";
const urlAdd = "http://localhost:6000/corredores/add";
const urlDelete = "http://localhost:6000/corredores/del";
const urlOne = "http://localhost:6000/corredores/one";
const urlUpdate = "http://localhost:6000/corredores/upd";

//Read
export const allCorredores = async () =>{
    try {
        const corredor = await fetch(urlAll);
        const infoCorredor = corredor.json();
        return infoCorredor;
    } catch (error) {
        console.log(error);
    }
}

//Insert
export const addCorredor = async (registro) => {
    try {
      await fetch(`${urlAdd}/`, {
        method: "POST",
        body: JSON.stringify(registro),
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location = "index.html";
    } catch (error) {
        console.log(error);
    }
};

//Delete
export const deleteCorredor = async (id) =>{
    try {
        await fetch(`${urlDelete}/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
            }
        });
        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
    }
};

//Read One
export async function selectOne(id) {
    try {
        const response = await fetch(`${urlOne}/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

//Update
export async function updateCorredor(data,id){
    try {
            await fetch(`${urlUpdate}/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
    }
};