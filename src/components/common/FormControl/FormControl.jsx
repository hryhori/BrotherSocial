import s from "./FormControl.module.css"

export const Textarea = ({input, meta, ...props}) =>{
    let hasError = meta.error
    return(
        <div className={hasError ? s.error : ""}>
        <textarea {...input} {...props}></textarea>
        {hasError && <span>*{meta.error}</span>}
        <span className={s.length}>{input.value.length + "/" + props.maxLength}</span>
        </div>
    )
}

export const Input = ({input, meta, ...props}) =>{
    let hasError = meta.touched && meta.error;
        return(
            <div className={hasError ? s.error_login : ""}>
            <input {...input} {...props}></input>
            {hasError && <span>*{meta.error}</span>}
            </div>
    )
}