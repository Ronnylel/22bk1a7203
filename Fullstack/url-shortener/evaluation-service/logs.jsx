function Log (stack,level,pkg,message) {
    window.message(`${stack} throws ${level} warning in ${pkg} package with message ${message}`)
}

export default Log