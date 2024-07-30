import swagger from 'feathers-swagger';

export default function() {
    return swagger({
        docsPath : '/docs',
        specs: {
            info: {
                title: 'Gerenciador de TCC',
                description: 'Documentação dos endpoints da api RESTful de gerenciamento de TCC',
                version: '1.0.0',
            },
            schemes: ['http', 'https']
        },
            ui: swagger.swaggerUI({}),
    });
}