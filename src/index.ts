#! /usr/bin/env node
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
    .usage('reagent [command] [...args] [...flags]')
    .command(
        'init [directory]',
        'Initializes Reagent project in provided directory',
        (yargs) => {
            yargs.positional(
                'directory',
                {
                    type: 'string',
                    default: '.',
                    describe: 'directory where reagent will be initialized'
                }
            );
        }
    )
    .example('reagent init .', 'Initialize reagent in current directory')
    .help(true)
    .demandCommand()
    .recommendCommands()
    .strict()
    .parseSync()

console.log(argv);
