export const typography = ({theme}:any) => {
    return {
        DEFAULT: {
            css: {
                //'--tw-prose-code': "red",
                //'--tw-prose-invert-code': "red",
                '--tw-prose-th-borders': theme("colors.default-200"),
                '--tw-prose-td-borders': theme("colors.default-200"),
                '--tw-prose-invert-th-borders': theme("colors.default-100"),
                '--tw-prose-invert-td-borders': theme("colors.default-100"),

                maxWidth: '100ch',
                code : {
                    color : theme("colors.default-900"),
                    background : theme("colors.default-50"),
                    padding : theme("spacing.1"),
                    paddingHorizontal : theme("spacing.2"),
                    borderRadius : theme("spacing.2"),
                    borderWidth : "1px",
                    borderColor : theme("colors.default-200"),

                },
                h2 : {
                    code : {
                        fontSize : ".75rem",
                    }
                },
                dd : {
                    code : {
                        "&:before" : {
                            content : "none",
                        },
                        "&:after" : {
                            content : "none",
                        }
                    }
                },
                table : {
                    thead : {
                        tr : {
                            th : {
                                textAlign : "left",
                            }
                        }
                    },
                    code : {
                        fontSize : ".64rem",
                    }
                }
            }
        },
    }
}
