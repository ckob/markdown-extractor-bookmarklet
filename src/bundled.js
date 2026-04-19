import { Readability } from '@mozilla/readability';
import TurndownService from 'turndown';
import { marked } from 'marked';
import { extractAndShow } from './core.js';

extractAndShow(Readability, TurndownService, marked);
