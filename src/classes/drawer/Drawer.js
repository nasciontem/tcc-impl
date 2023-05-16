/**
 * @file Módulo responsável por direcionar comandos à estrutura de dados que se
 * deseja animar.
 * @copyright Lucas N. T. Sab 2023
 */
import BSTDrawing from '../drawing/BSTDrawing';

const STRUCTURES = {
  'BST': commands => (new BSTDrawing()).parse(commands)
};

export default class Drawer {
  /**
   * Método responsável por desenhar quadros para exibição de animação da estrutura
   * desejada.
   * 
   * @param {string} structure 
   * @returns {array}
   */
  static draw(structure) {
    return { with: commands => STRUCTURES[structure]?.(commands) };
  }
}