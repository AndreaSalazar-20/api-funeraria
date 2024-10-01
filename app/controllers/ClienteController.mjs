import { Op } from 'sequelize';
import { Cliente } from '../models/index.mjs';
import BadRequestException from '../../handlers/BadRequestException.mjs';

export default class ClienteController {
  static async list(req, res) {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  }

  static async create(req, res) {
    const { nombre, dui, email } = req.body;
    const cliente = await Cliente.create({
      nombre,
      dui,
      email,
    });
    res.json(cliente);
  }

  static async show(req, res) {
    const cliente = await Cliente.findByPk(req.params.id);
    res.json(cliente);
  }

  static async update(req, res) {
    const { nombre, dui, email } = req.body;
    const cliente = await Cliente.findByPk(req.params.id);

    if (!cliente) {
      throw new BadRequestException('Cliente no existe');
    }

    const existEmail = await Cliente.findOne({
      where: {
        email,
        id: {
          [Op.ne]: cliente.id,
        },
      },
    });

    if (existEmail) {
      throw new BadRequestException('Email ya existe');
    }

    const existDui = await Cliente.findOne({
      where: {
        dui,
        id: {
          [Op.ne]: cliente.id,
        },
      },
    });

    if (existDui) {
      throw new BadRequestException('DUI ya existe');
    }

    cliente.nombre = nombre;
    cliente.dui = dui;
    cliente.email = email;
    await cliente.save();
    res.json(cliente);
  }

  static async delete(req, res) {
    const {id} = req.params;
    const cliente = await Cliente.findByPk(id);
    await cliente.destroy();
  }
}
