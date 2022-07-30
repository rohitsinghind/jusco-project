export const styles = {
    container:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        background:"white",
        py:"20px"
    },
    imgLogo:{
        width:"50%",
        marginBottom:"20px",
    },
   
    head:{
        fontFamily: "'Open Sans', sans-serif",
        fontSize:"28px",
        color:"#2D2D2D",
    },
    inputField:{
        width:"500px",
        my:"10px",
        ml:"1rem",
        '@media (max-width: 1070px)': {
            width:"300px",
            '@media (max-width: 650px)': {
                width:"100%",
              },
          },
    },
    submitBtn:{
        width:"150px",
        background:"#1b84e7",
        mt:"20px",
    },
    signupText:{
        fontFamily: "'Open Sans', sans-serif",
        fontSize:"25px",
        color:"#5D5D5D",
        mb:"10px",
        mt:"35px",
        alignSelf:"center"
    },
    row:{
        display:"flex",
        justifyContent:"start",
        alignItems:"center",
        '@media (max-width: 650px)': {
            width:"100%",
          },
    },
    inputBtnText:{
        fontFamily: "'Open Sans', sans-serif",
        fontSize:"18px",
        color:"#1D1D1D",
        mt:"10px"
    },
    inputBtn:{
       marginLeft:"20px",
       marginTop:"15px"
    },

  };