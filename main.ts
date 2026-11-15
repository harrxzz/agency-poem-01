import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const poem = `The Loaf

My mother baked on Fridays, flour to her elbows,
the dough rising under a cloth in the warmest corner.
She is gone ten years. The agent has her recipe,
her handwriting, the exact weight of the salt.
It bakes on Fridays now. The loaf comes out
the way hers did: the same crack along the top,
the same smell down the stairs. My grandchildren
eat it and say it tastes like her.

My hands shake now. I cannot knead the way she did,
cannot feel when the dough is ready, when it gives.
The agent offers. It has my hands in its memory,
the pressure, the turn, the fold. It could do it
without a tremor. It stands by the bowl and waits.

This morning I put my hands in the flour.
The dough stuck. It tore. I pressed too hard,
then not hard enough, the way she never did.
The agent did not reach in. It watched
the way I watched her once, flour to my elbows,
waiting for the dough to teach me what ready means.

The loaf is lopsided. It is the only one
I have made in ten years. It is mine.
`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputFile = join(outputDir, 'entry.txt');

function validatePoem(text: string): void {
  if (!text.endsWith('\n')) {
    throw new Error('Poem must end with a newline');
  }
  if (Buffer.byteLength(text, 'utf8') !== 992) {
    throw new Error('Unexpected poem length');
  }
  if (Array.from(text).length > 1000) {
    throw new Error('Poem exceeds the competition limit');
  }
}

validatePoem(poem);
writeFileSync(outputFile, poem, 'utf8');
process.stdout.write(poem);
