import Cell from './cell/Cell'
import styles from './Board.module.css'

export default function Board(){
    var cells = []
    
    for(let i = 0; i < 8; i++){
        let isBlack = i % 2 == 0 ? true : false
        for( let j = 0; j < 8 ; j++){
            if(isBlack){
                cells.push( <Cell />) 
                isBlack = false
                
            }else{
                cells.push( <Cell black />)
                isBlack = true
            }
        }  
    }

    return(
        <div className={styles.board}>
            {cells}
        </div>

    )
}