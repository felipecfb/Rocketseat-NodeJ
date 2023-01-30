import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Car } from './Car';
import { Specification } from './Specification';

@Entity('specifications_cars')
class SpecificationsCars {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @ManyToOne(() => Car)
  @JoinColumn({ name: 'car_id' })
  car: Car;

  @Column({ type: 'varchar' })
  car_id: string;

  @ManyToOne(() => Specification)
  @JoinColumn({ name: 'specification_id' })
  specification: Specification;

  @Column({ type: 'varchar' })
  specification_id: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;
}

export { SpecificationsCars };
