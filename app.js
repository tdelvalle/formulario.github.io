let usuarios=
[
  {  nombre :'ana', apellido:'acosta', celular :'3206785476', cedula :'1042444987' ,id_de_usuario : '001', contraseña: '12345' , fecha_de_nacimiento:'20/06/1997'},
  {  nombre :'sofia', apellido:'aragon', celular :'3206876476', cedula :'10435678905' ,id_de_usuario : '002', contraseña: '67890' , fecha_de_nacimiento:'09/11/1998'},
  {  nombre :'carlos', apellido:'orozco', celular :'3206798076', cedula :'1065437898' ,id_de_usuario : '003', contraseña: '09876' , fecha_de_nacimiento:'26/04/1999'},
  {  nombre :'maria', apellido:'diaz', celular :'3206785987', cedula :'5409865' ,id_de_usuario : '004', contraseña: '54321' , fecha_de_nacimiento:'30/08/1996'},
  {  nombre :'pedro', apellido:'perez', celular :'3206785470', cedula :'54678940' ,id_de_usuario : '005', contraseña: '08653' , fecha_de_nacimiento:'10/09/1995'}
]


    let elemento=document.getElementById('cuerpo-tabla')
    let i=1
    const listar=()=>{  
    let contenidotabla=""
    for (let i = 0; i< usuarios.length; i++) {
         contenidotabla+=`<tr>
         <th scope="row">${i+1}</th>
         <td>${usuarios[i].nombre}</td>
         <td>${usuarios[i].apellido}</td>
         <td>${usuarios[i].celular}</td>
         <td>${usuarios[i].cedula}</td>
         <td>${usuarios[i].id_de_usuario}</td>
         <td>${usuarios[i].contraseña}</td>
         <td>${usuarios[i].fecha_de_nacimiento}</td>
       </tr>`
       
    }
    elemento.innerHTML=contenidotabla;

  }
const registrar=()=>{
    const nombre=document.getElementById('nombre').value.trim()
    const apellido=document.getElementById('apellido').value.trim()
    const celular=document.getElementById('celular').value.trim()
    const cedula=document.getElementById('cedula').value.trim()
    const id_de_usuario=document.getElementById('id_de_usuario').value.trim()
    const contraseña=document.getElementById('contraseña').value.trim()
    const fecha_de_nacimiento=document.getElementById('fecha_de_nacimiento').value.trim()

    if (!nombre) { return alert ("ingresar nombre")}
    if (!apellido) { return alert ("ingresar apellido")}
    if (!celular) { return alert ("ingresar celular")}
    if (!cedula) { return alert ("ingresar cedula")}
    if (!id_de_usuario) { return alert ("ingresar id de usuario")}
    if (!contraseña) { return alert ("ingresar contraseña")}
    if (!fecha_de_nacimiento) { return alert ("ingresar fecha de nacimiento")}
     elemento.innerHTML+=`<tr>
     <th scope="row">${i}</th>
     <td>${nombre}</td>
     <td>${apellido}</td>
     <td>${celular}</td>
     <td>${cedula}</td>
     <td>${id_de_usuario}</td>
     <td>${contraseña}</td>
     <td>${fecha_de_nacimiento}</td>
   </tr>`
   const nuevoUsuario={nombre,apellido,celular,cedula,id_de_usuario,contraseña,fecha_de_nacimiento}
   usuarios.push(nuevoUsuario)
   i++
   document.getElementById('nombre').value=""
   document.getElementById('apellido').value=""
   document.getElementById('celular').value=""
   document.getElementById('cedula').value=""
   document.getElementById('id_de_usuario').value=""
   document.getElementById('contraseña').value=""
document.getElementById('fecha_de_nacimiento').value=""
 
}