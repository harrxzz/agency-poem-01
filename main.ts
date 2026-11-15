import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const poem = `The Wrong Note

Every night after dinner, the agent plays her favourite song
through the kitchen speaker while she washes the plates —
every note exact, every breath where the singer left it,
her own voice, only cleaner, only tireless.

She hums along without thinking,
the same three notes, every night,
while the pan soaks and the kettle cools.

Last Tuesday I tried to hum it for her myself.
I lost the tune halfway through the chorus,
my voice cracked on the high note,
and the water kept running while neither of us spoke.

Then she laughed — not at me, at the song,
finally sounding like something a person would make.
She dried her hands and said, do it again,
the wrong part too.

The machine can play it perfect.
Only I can play it wrong.
`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputFile = join(outputDir, 'entry.txt');

function validatePoem(text: string): void {
  if (!text.endsWith('\n')) {
    throw new Error('Poem must end with a newline');
  }
  if (Buffer.byteLength(text, 'utf8') !== 752) {
    throw new Error('Unexpected poem length');
  }
  if (Array.from(text).length > 1000) {
    throw new Error('Poem exceeds the competition limit');
  }
}

validatePoem(poem);
writeFileSync(outputFile, poem, 'utf8');
process.stdout.write(poem);
